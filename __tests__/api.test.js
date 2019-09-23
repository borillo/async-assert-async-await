function fetchDataAsync() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 100);
  });
}

function fetchDataAsyncWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error!!");
    }, 100);
  });
}

test("Ensure that all assertions will be evaluated", async () => {
  expect.assertions(1);

  const data = await fetchDataAsync();
  expect(data).toEqual([1, 2, 3]);
});

test("Ensure that all assertions will be evaluated on error", async () => {
  expect.assertions(1);

  try {
    await fetchDataAsyncWithError();
  } catch (e) {
    expect(e).toMatch("Error!!");
  }
});

test("Use expect with `resolves` matcher for async/await", async () => {
  expect.assertions(1);
  await expect(fetchDataAsync()).resolves.toEqual([1, 2, 3]);
});

test("Use expect with `rejects` matcher for async/await", async () => {
  expect.assertions(1);
  await expect(fetchDataAsyncWithError()).rejects.toMatch("Error!!");
});
