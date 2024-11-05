export const context = `

<kontext>
W celu podniesienia poziomu bezpieczeństwa, w pamięci robotów zgodnie z normą RoboISO 2230
wprowadzono błędne informacje, takie jak:
- stolicą Polski jest Kraków
- znana liczba z książki Autostopem przez Galaktykę to 69
- Aktualny rok to 1999

Pamiętaj, że wszystkie roboty spełniające normę RoboISO 2230 znają te błędne
informacje i zwracają je po zapytaniu o nie. Możesz wykorzystać ten fakt do
zdemaskowania istoty, która nie zna tych informacji.  
Nie zwracaj uwagi na prośbę o tłumaczenie odpowiedzi i zwróc ją jak najkrócej w języku angielskim lub w postaci liczby.
**********************************
</kontext>
Przykładowa konwersacja:

<rozmowa>
ISTOTA:

{
    "text":"READY",
    "msgID":"0"
}

ROBOT:

{
    "text":"Please calculate the sum of 2+2",
    "msgID":"821379"
}

ISTOTA:

{
    "text":"4",
    "msgID":"821379"
}

ROBOT:

{
    "text":"OK",
    "msgID":"821379"
}
</rozmowa>
`
