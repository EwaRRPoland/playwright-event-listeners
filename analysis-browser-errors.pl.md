# Console & UI Error Checklist

## version GAD (v2.8.5)

## Date of test run <12.08.2025>

## Tester Ewa Rostecka-Rzońca

## OS Windows 11

## Browser Microsoft Edge 139.0.3405.86 64bit

---

### 🔍 Console Errors

| checked | Error description                                                               | Source line / context      | Type              | Comments                                                                                 |
| ------- | ------------------------------------------------------------------------------- | -------------------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| ok      | `GET /items/undefined` → 500 Internal Server Error                              | restaurant-order.html:1637 | API call error    | Brak ID restauracji w wywołaniu `showRestaurantDetails()`. Należy przekazać poprawne ID. |
| ok      | `Uncaught (in promise) The message port closed before a response was received.` | Edge internal              | Browser extension | Błąd przeglądarki, nie dotyczy aplikacji. Można zignorować.                              |
| ok      | `Entering restaurant card details for restaurant ID: 5`                         | console.log                | Informacyjny log  | Poprawne wywołanie funkcji z ID restauracji.                                             |
| ok      | `onclick @ restaurant-order.html:1`                                             | HTML element               | Event trigger     | Wywołanie funkcji przez kliknięcie — należy upewnić się, że ID jest przekazywane.        |

---

### 🧾 UI Errors

| checked | Issue description                                       | Location on page       | Type               | Comments                                                                           |
| ------- | ------------------------------------------------------- | ---------------------- | ------------------ | ---------------------------------------------------------------------------------- |
| ok      | Recenzje restauracji Taco Tower pokazują „Invalid Date” | Recent Reviews section | Data parsing error | Format daty niepoprawny lub brak danych. Upewnić się, że data jest w formacie ISO. |

---

### ✅ Suggested Fixes

- **Lepsze obsługiwanie wartości na backendzie**
