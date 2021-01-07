---
published: true
title: Safe Area, czyli jak dostosować wyświetanie stronę do urządzeń z notchem
date: '2015-05-28T22:40:32.169Z'
category: ''
tags: ['a']
---

Safe Area to obszar ekranu w którym treść nie będzie przycięta na urządzeniach z ekranem od ramki do ramki, np. w iPhone'ach od wersji X.
<!-- Aby zabezpieczyć naszą stronę przed ewentualym przcieciem traści lub elementów wyswietlanchy na ekranie posłuymy się CSS-ową funkcją `env` z  -->

Aby zabezpieczyć naszą stronę przed przycięciem treści lub wyświetlanych elementów musimy zaktualizować lub dodać tag meta viewport w sekcji head.

```html
<meta name="viewport" content="viewport-fit=cover" />
```

Wartość `viewport-fit=cover` informuje przeglądarkę o tym, że strona ma być wyświetlana od ramki do ramki bez automatycznego dodawania przestrzeni na górze, na dole, po lewej i po prawej stronie.

OK! Zrobiliśmy pierwszy krok. Czas zobaczyć rezultat naszej pracy!


Nie wszystko wygląda tak jak sobie to wymarzyliśmy. Przyszedł czas na krok numer 2, czyli dodanie obsługi Safe Area do CSS poszczególnych elementów.

Do tego celu użyjemy funkcji CSS - `env` - z parametrem `safe-area-inset-top`, `safe-area-inset-bottom`, `safe-area-inset-left` i `safe-area-inset-right`.

Zacznijmy od nagłówka strony. W tym przypadku będziemy potrzebować dodatkowego paddingu po lewej i po prawej stronie.

```css
header {
  padding-left: env(safe-area-inset-left, 20px);
  padding-right: env(safe-area-inset-right, 20px);
}
```

Domyślną wartość!!!

W przypadku stopki będziemy chcieli dodać do już istniejącego paddingu rozmiar safe area.

```css
footer {
  padding-bottom: calc(20px + env(safe-area-inset-bottom));
}
```


# height
# margin


## Podsumowanie

Safe Area jest jedynie dodatkiem i nie jest wymagana do implementacji, jednak znacznie zwiększa user experiance uytkownikow iPhone'a i innyh urządzeni posiadających wcięcie w ekranie (notch) lub zaokrąglenia narożników.
