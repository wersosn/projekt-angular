# Aplikacja do Zapisywania i Zarządzania wydarzeniami

## Opis
Aplikacja umożliwia użytkownikom zapisywanie się na wydarzenia organizowane przez administratora. Użytkownicy muszą się zarejestrować lub zalogować, aby brać udział w wydarzeniach. Aplikacja wyświetla wszystkie dostępne wydarzenia na stronie głównej, a użytkownik może wybrać wydarzenie, zapoznać się z jego szczegółami, a następnie wybrać godzinę, na którą chce się zapisać.

Po zapisaniu się na wydarzenie, dane o wydarzeniach, w których bierze udział użytkownik, są widoczne na jego koncie oraz w kalendarzu wydarzeń.

## Funkcjonalności
- **Rejestracja i logowanie użytkowników**: Użytkownicy mogą zarejestrować się i zalogować do aplikacji.
- **Lista dostępnych wydarzeń**: Wszystkie dostępne wydarzenia organizowane przez administratora są widoczne na stronie głównej aplikacji.
- **Szczegóły wydarzenia**: Użytkownicy mogą zobaczyć szczegóły wydarzenia, takie jak opis, data, godzina, lokalizacja oraz dostępność miejsc.
- **Zapis/wypis na wydarzenia**: Użytkownicy mogą zapisać/wypisywać się na wydarzenie, na które chcą się zapisać.
- **Kalendarz użytkownika**: Zapisane wydarzenia są widoczne na koncie użytkownika oraz w kalendarzu wydarzeń.
- **Zarządzanie wydarzeniami przez administratora**: Administratora może edytować,usuwać,tworzyć wydarzenia a nawet dodawać,usuwać wolontariuszy z wydarzeń.
- **Ograniczenie liczby miejsc**: Liczba dostępnych miejsc na wydarzeniu jest ograniczona. Po zapisaniu się użytkownika liczba dostępnych miejsc zmniejsza się.


## Konfiguracja projektu

### Wymagania
 * Zainstalowany [Node.js](https://nodejs.org/) razem z menadżerem pakietów [npm](https://www.npmjs.com/get-npm)

### Przygotowanie projektu
Pobranie i przejście do głównego folderu projektu:
```
git clone https://github.com/wersosn/projekt-angular.git 
cd projekt-angular/NGO-master
```
Instalacja wymaganych pakietów:
```
npm install
```
Uruchomienie aplikacji w trybie deweloperskim:
```
ng serve
```
Aplikacja zostanie uruchomiona lokalnie i dostępna pod adresem `http://localhost:4200/`


## Dokumentacja

Wygenerowanie oraz uruchomienie dokumentacji:
```
npm run compodoc
```
Dokumentaca zostanie uruchomiona lokalnie i dostępna pod adresem `http://localhost:8080/`


## Instrukcja użytkownika
Spis treści dostępny jest w pliku [README](instrukcja/README.md) w katalogu `instrukcja`