// Klaviaturadan ədədləri almaq üçün prompt-dan istifadə edirik
let eded1 = parseFloat(prompt("Birinci ədədi daxil edin:"));
let eded2 = parseFloat(prompt("İkinci ədədi daxil edin:"));
let eded3 = parseFloat(prompt("Üçüncü ədədi daxil edin:"));

// Ortalama hesablaması
let ortalama = (eded1 + eded2 + eded3) / 3;

// Nəticəni çap etmək
console.log("Ədədlərin ortalaması: " + ortalama);
