export function sitePath(path) {
  return path.startsWith('/') ? (process.env.NEXT_PUBLIC_BASE_PATH || '') + path : path;
}
