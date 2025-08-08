# Requirements

- No errors in the browser console
- No 500 responses from back-end

> Those requirements focus on **quality of behavior**, not just whether the UI works.

---

## Requirement 1: No Errors in the Browser Console

### ✅ Why it's important:

- **User trust**: Errors in the console may indicate hidden problems that can break functionality later. It's like warning lights in a car — they might not stop you immediately, but they mean something's wrong.
- **Developer signal**: Console errors often point to broken scripts, missing resources, or misused APIs.
- **Best practice**: A clean console is a basic indicator of frontend health!

### 🔍 How to check:

- Open browser DevTools (F12) -> Console tab.
- Reload the page and check for red error messages.

---

## Requirement 2: No 500 Internal Server Error Responses

### ✅ Why it's important:

- **Backend stability**: HTTP 500 errors indicate unhandled exceptions or critical failures on the server.
- **Data integrity**: These failures may result in partial updates or corrupted state.
- **User impact**: End users usually see generic error messages, but sometimes they can see sensitive data (like server directory paths).
- **Security concern**: Repeated 500s may expose stack traces or server internals in development environments.

### 🔍 How to check:

- Use DevTools -> Network tab.
- Look for requests with `Status = 500`.
- Alternatively, check logs or use Playwright's response listeners.

---

## Summary

Both requirements help:

- Improve **user experience**
- Prevent **technical debt**
- Increase **test reliability**
- Reduce **bugs reported in productio**
