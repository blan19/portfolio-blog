import { Meta } from "./markdown";

type ErrorWithMessage = {
  message: string;
};

export const getCategry = (data: Meta[]) => {
  const category = new Set<string>();
  for (const d of data) {
    const { stack } = d;
    stack.forEach((s: string) => category.add(s));
  }
  return Array.from(category);
};

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>).message === "string"
  );
};

const toErrorWithMessage = (maybeError: unknown): ErrorWithMessage => {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
};

export const getErrorMessage = (error: unknown) =>
  toErrorWithMessage(error).message;