// REDIGERA HÄR: Byt namn, beskrivning, pris, material, bilder och Stripe-länkar.
// Priser anges i SEK. Ange en verklig Stripe Payment Link per produkt innan försäljning.
// Med Payment Links sker köp per produkt (en produkt/antal åt gången), inte en gemensam varukorg.
window.TOUSILK_CONFIG = {
  instagram: 'https://www.instagram.com/', // BYT till er faktiska Instagram-URL
  email: 'hello@tousilk.se',
  products: [
    {id:'scarf-01',name:'The Sienna',subtitle:'Warm tones, timeless mood',price:399,material:'Material: verifieras före lansering',size:'Storlek: lägg till',image:'assets/scarf-sienna.svg',badge:'THE FIRST EDIT',stock:5,paymentLink:''},
    {id:'scarf-02',name:'The Celeste',subtitle:'A little softness for every day',price:399,material:'Material: verifieras före lansering',size:'Storlek: lägg till',image:'assets/scarf-celeste.svg',badge:'NEW',stock:5,paymentLink:''},
    {id:'scarf-03',name:'The Margot',subtitle:'A playful touch of elegance',price:399,material:'Material: verifieras före lansering',size:'Storlek: lägg till',image:'assets/scarf-margot.svg',badge:'NEW',stock:5,paymentLink:''}
  ]
};
