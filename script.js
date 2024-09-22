// FAQ Data from the document
const faqData = [
    { question: "Can a customer exchange earrings?", answer: "Yes they can providing that the earrings are unworn/as new within the 30 days of purchase." },
    { question: "Can a customer exchange body jewellery?", answer: "Yes, provided the items meet our regular returns criteria." },
    { question: "Does a customer have to go back to the store of purchase?", answer: "No, we can assist all our customers at any of our locations Australia wide." },
    { question: "What if I don’t carry that watch brand that they want to exchange?", answer: "Yes we can still assist them. Ensure that we have all components for the exchange and when complete send it back to head office for redistribution." },
    { question: "Does our jewellery tarnish?", answer: "Absolutely! Sterling silver and 9ct gold can tarnish. This process is exacerbated by perfumes, creams, and oils in our skin. It’s normal and needs periodic cleaning." },
    { question: "Can we exchange on a watch that we have removed a link from?", answer: "Providing they bring in all components of the watch to exchange it then yes we can. We can put the links back in if necessary." },
    { question: "Can we do more than one link adjustment for a customer?", answer: "Yes, sometimes they need to wear it for a day to realize it's too tight or too loose. It's good after-sales service to ensure it's comfortable." },
    { question: "Can I help a customer with a gift card that won’t work or has expired?", answer: "Yes! We have a gift card team at head office that is happy to assist." },
    { question: "The customer doesn’t have a receipt or it’s purchased from another store?", answer: "We can assist the customer in locating a receipt. Take the time to identify the product and search your transactions." },
    { question: "What if it was a gift and they don’t have a receipt?", answer: "We will always try to assist these customers. If they can provide details, we’ll try to locate the transaction." },
    { question: "My store phone doesn’t work?", answer: "99% of the time you just need to reset your grandstream box. If it still doesn’t work, email Helpdesk." },
    { question: "Can we exchange on PMD stock?", answer: "Yes, we can." },
    { question: "What if the customer had come in after the 30 days for an exchange?", answer: "If the reason is valid and the item appears unworn, do the exchange." },
    { question: "Can I refuse a gift card on an exchange?", answer: "If it's within the 30 days of purchase and not a special order, no, you cannot refuse a gift card." },
    { question: "Can a customer exchange on an exchange?", answer: "Yes, although it can be annoying. The policy states it's 30 days from the date of purchase, not from the exchange." },
    { question: "If a customer is wanting a refund can I refer them to Head office for authorisation?", answer: "If they are not entitled to a refund and there are no extenuating circumstances, no. If a refund is the best decision, do it." },
    { question: "Can a customer register their own Seiko purchase?", answer: "No, this needs to be completed in-store via the portal." },
    { question: "Do high value refunds need to be returned via cheque?", answer: "Refunds should be returned the same way they were paid. Exceptions can be made for high-value cash payments, but otherwise, it should go to the same card." },
    { question: "My customer wants to buy a JCP but it has been 5 weeks since they made their purchase.", answer: "Is the item in good condition? If yes, do the JCP." }
];

// Knowledge base for watches from the Prouds Canberra Centre Learning Booklet, Seiko details included
const knowledgeBase = {
    seiko: {
        origin: "Seiko watches feature Japanese movements and are assembled in China. Seiko has a rich history, starting with the Laurel in 1913, Japan's first wristwatch, and the Quartz Astron in 1969, the world’s first quartz watch.",
        movementTypes: "Seiko offers a variety of movement types including Quartz, Automatic, Solar, and GPS Solar movements. The GPS Solar models can adjust timezones globally with atomic clock precision&#8203;:contentReference[oaicite:0]{index=0}&#8203;:contentReference[oaicite:1]{index=1}.",
        waterResistance: "Seiko’s water resistance varies by model, but most diver's watches in the Prospex collection have a water resistance of 200 meters, compliant with ISO 6425 standards for diving. Everyday models generally range from 50 to 100 meters of water resistance&#8203;:contentReference[oaicite:2]{index=2}.",
        warranty: "Seiko watches generally come with a 3-year warranty, with the first year covered internationally&#8203;:contentReference[oaicite:3]{index=3}.",
        designs: "Seiko offers a wide range of designs for both men and women, including Yellow Gold (YG), Rose Gold (RG), Stainless Steel (SS), and two-tone models. Bands are available in stainless steel, leather, or resin&#8203;:contentReference[oaicite:4]{index=4}.",
        glass: "Seiko uses either Hardlex glass or sapphire crystal for its watches. Sapphire crystal is highly resistant to scratches and second in hardness only to diamond, while Hardlex is known for its impact resistance and is commonly used in Seiko models&#8203;:contentReference[oaicite:5]{index=5}.",
        powerSource: "Seiko watches are powered by a variety of sources: Quartz (battery), Automatic (powered by wrist movement or hand-winding), Solar (powered by natural or artificial light), and GPS Solar (with global time synchronization using GPS)&#8203;:contentReference[oaicite:6]{index=6}&#8203;:contentReference[oaicite:7]{index=7}.",
        craftsmanship: "Seiko is renowned for its craftsmanship, from the intricate engineering of mechanical watches, such as the Seiko 5 series, to the high-precision solar-powered models. Seiko’s innovative Magic Lever mechanism in automatic watches increases winding efficiency, and the company continues to set standards in horological excellence&#8203;:contentReference[oaicite:8]{index=8}."
    },
    citizen: {
        origin: "Citizen watches feature Japanese movements and are assembled in China.",
        collection: "Citizen offers contemporary, chronograph, quartz battery, automatic/kinetic movement, and Eco-Drive (solar) across all types, with a power reserve of up to 6 months.",
        design: "Available for both ladies and men in YG, RG, SS, and two-tone with stainless steel, leather, or resin bands.",
        glass: "Citizen watches use mineral or sapphire crystal, which is scratch-resistant.",
        powerSource: "Powered by Eco-Drive (solar), automatic/kinetic.",
        waterResistance: "The PROMASTER series is designed for diving and is pressure tested for 200 meters.",
        warranty: "Citizen watches come with a 5-year warranty, including the 1st year international and 1 year for the battery."
    },
    lorus: {
        origin: "Lorus watches feature Japanese movements and are assembled in China. Lorus is owned by Seiko, sharing similar history and build quality at a more affordable price.",
        collection: "The collection includes contemporary, chronograph, quartz battery, and solar power (up to 6 months power reserve).",
        design: "Available for both ladies and men in YG, RG, SS, and two-tone with stainless steel, leather, or resin bands.",
        glass: "Lorus watches feature Hardlex crystal, which is scratch-resistant.",
        powerSource: "Powered by solar (natural or artificial light) or battery.",
        waterResistance: "Water resistance varies by model, typically between 50 and 100 meters, making them splash-proof.",
        warranty: "Lorus watches come with a 3-year warranty, including the 1st year international."
    },
    gShock: {
        durability: "G-Shock watches are designed for military and outdoor use, offering shock and magnetic resistance.",
        waterResistance: "G-Shock watches are water-resistant up to 200 meters, making them suitable for professional marine activities.",
        features: "They include day, date, time, stopwatch, timer, alarms, world time, and backlight. Some models also feature Bluetooth connectivity, solar power, and carbon core construction.",
        warranty: "G-Shock watches come with a 2-year international warranty."
    },
    guess: {
        style: "Guess is a fashion brand offering watches for both men and women.",
        design: "Available in YG, RG, and SS with steel, leather, and resin bands, and some models feature crystals.",
        waterResistance: "Guess watches are water-resistant up to 50 meters, but only splash-proof.",
        warranty: "Guess watches come with a 2-year warranty for Australia and New Zealand, with 2 years for movement and 1 year for the battery."
    },
    casioBabyG: {
        designedFor: "The Casio Baby-G is designed for women and children as a smaller version of G-Shock.",
        waterResistance: "Water resistance ranges from 100 to 200 meters, depending on the model.",
        features: "Baby-G watches include day, date, alarm, timer, shock resistance, LED backlight, and some models feature a step tracker.",
        powerSource: "Powered by either a battery or solar, depending on the model.",
        warranty: "Baby-G watches come with a 2-year international warranty."
    }
};

// Function to provide dynamic responses
function getDynamicResponse(input) {
    if (input.includes("seiko")) {
        return knowledgeBase.seiko;
    } else if (input.includes("citizen")) {
        return knowledgeBase.citizen;
    } else if (input.includes("lorus")) {
        return knowledgeBase.lorus;
    } else if (input.includes("g-shock")) {
        return knowledgeBase.gShock;
    } else if (input.includes("guess")) {
        return knowledgeBase.guess;
    } else if (input.includes("baby-g")) {
        return knowledgeBase.casioBabyG;
    }
    return null;
}

// Function to handle question input and find the closest matching FAQ or dynamic response
function getAnswer() {
    const input = document.getElementById('questionInput').value.trim().toLowerCase();

    // Log the input to see what is being processed
    console.log("User input:", input);

    // First, check for dynamic responses related to watches
    const dynamicResponse = getDynamicResponse(input);
    if (dynamicResponse) {
        let response = '';
        Object.keys(dynamicResponse).forEach(key => {
            response += `${dynamicResponse[key]}\n`;
        });
        document.getElementById('answer').innerText = response;
        return;
    }

    // Get the best match for the user's input (fuzzy matching)
    const results = fuzzySet.get(input);
    console.log("Fuzzy matching results:", results);

    if (results && results.length > 0) {
        const bestMatch = results[0];
        const bestMatchScore = bestMatch[0];  // Similarity score
        const bestMatchQuestion = bestMatch[1];  // Matched question text

        console.log("Best match:", bestMatchQuestion, "Score:", bestMatchScore);

        // Set a higher threshold to avoid low-quality matches
        if (bestMatchScore >= 0.4) {  // Adjusted threshold
            const matchedFAQ = faqData.find(faq => faq.question.toLowerCase() === bestMatchQuestion.toLowerCase());
            document.getElementById('answer').innerText = matchedFAQ ? matchedFAQ.answer : "Sorry, I don't have an answer for that.";
        } else {
            document.getElementById('answer').innerText = "Sorry, I couldn't find a good match for your question.";
        }
    } else {
        document.getElementById('answer').innerText = "Sorry, I couldn't find a good match for your question.";
    }
}
