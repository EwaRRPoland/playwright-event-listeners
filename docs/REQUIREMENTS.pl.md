# Wymagania

- Brak `błędów` w konsoli przeglądarki
- Brak odpowiedzi `500 Internal Server Error` z backendu

> Wymagania te skupiają się na **jakości zachowania**, a nie tylko na tym, czy interfejs użytkownika działa.

---

## Brak błędów w konsoli przeglądarki

### ✅ Dlaczego to ważne:

- **Zaufanie użytkownika**: Błędy w konsoli mogą wskazywać na ukryte problemy, które mogą później złamać funkcjonalność. To jak lampki ostrzegawcze w samochodzie — mogą nie zatrzymać cię natychmiast, ale oznaczają, że coś jest nie tak.
- **Sygnał dla developera**: Błędy konsoli często wskazują na uszkodzone skrypty, brakujące zasoby lub niewłaściwie używane API.
- **Najlepsza praktyka**: Czysta konsola to podstawowy wskaźnik zdrowia frontendu!

### 🔍 Jak sprawdzić:

- Otwórz DevTools przeglądarki (F12) -> zakładka Konsola.
- Przeładuj stronę i sprawdź komunikaty błędów.

---

## Brak odpowiedzi 500 Internal Server Error

### ✅ Dlaczego to ważne:

- **Stabilność backendu**: Błędy HTTP 500 wskazują na nieobsłużone wyjątki lub błędy krytyczne na back-endzie.
- **Integralność danych**: Te awarie mogą skutkować uszkodzonymi danymi lub niekompletnymi transakcjami.
- **Wpływ na użytkownika**: Użytkownicy końcowi zwykle widzą ogólne komunikaty błędów, jedak czasem mogą zobaczyć wrażliwe dane (ścieżki katalogów na serwerze).
- **Kwestia bezpieczeństwa**: Powtarzające się błędy 500 mogą ujawnić ślady stosu lub wewnętrzne elementy serwera w środowiskach deweloperskich.

### 🔍 Jak sprawdzić:

- Użyj DevTools -> zakładka Sieć.
- Szukaj odpowiedzi z kodem `Status Code 500`.

---

## Podsumowanie

Oba wymagania pomagają:

- Poprawić **doświadczenie użytkownika**
- Zapobiegać **długowi technicznemu**
- Zwiększyć **niezawodność testów**
- Zmniejszyć **błędy zgłaszane w produkcji**
