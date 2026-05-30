import { DOC_SOURCES } from "./docs-content.generated";

export function loadDocSource(file: string): string {
  const source = DOC_SOURCES[file];
  if (source === undefined) {
    throw new Error(
      `Unknown doc file: ${file}. Run \`node ./scripts/generate-docs-content.mjs\` to regenerate docs content.`,
    );
  }
  return source;
}
