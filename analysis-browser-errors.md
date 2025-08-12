# Console & UI Error Checklist

## version GAD (v2.8.5)

## Date of test run <12.08.2025>

## Tester Ewa Rostecka-Rzońca

## OS Windows 11

## Browser Microsoft Edge 139.0.3405.86 64bit

---

### 🔍 Console Errors

| checked | Error description                                                               | Source line / context      | Type              | Comments                                                                         |
| ------- | ------------------------------------------------------------------------------- | -------------------------- | ----------------- | -------------------------------------------------------------------------------- |
| ok      | `GET /items/undefined` → 500 Internal Server Error                              | restaurant-order.html:1637 | API call error    | Missing restaurant ID in `showRestaurantDetails()`. Ensure a valid ID is passed. |
| ok      | `Uncaught (in promise) The message port closed before a response was received.` | Edge internal              | Browser extension | Browser-related error, not caused by the app. Can be ignored.                    |
| ok      | `Entering restaurant card details for restaurant ID: 5`                         | console.log                | Informational log | Valid function call with restaurant ID.                                          |
| ok      | `onclick @ restaurant-order.html:1`                                             | HTML element               | Event trigger     | Function triggered by click — ensure ID is passed correctly.                     |

---

### 🧾 UI Errors

| checked | Issue description                      | Location on page       | Type               | Comments                                                      |
| ------- | -------------------------------------- | ---------------------- | ------------------ | ------------------------------------------------------------- |
| ok      | Taco Tower reviews show “Invalid Date” | Recent Reviews section | Data parsing error | Date format is invalid or missing. Ensure ISO format is used. |

---

### ✅ Suggested Fixes

- **Fix restaurant ID passing** in `showRestaurantDetails(id)`:
  ```html
  <div onclick="showRestaurantDetails(5)">...</div>
  ```
