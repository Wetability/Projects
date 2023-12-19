function app(id) {
  const app = document.getElementById(id);

  if (!app) {
    throw new Error(`The element with this id is missing ${id}`);
  }
  return app;
}

export default app;
