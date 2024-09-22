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

// Initialize FuzzySet with FAQ questions
const fuzzySet = FuzzySet();
faqData.forEach(faq => {
    fuzzySet.add(faq.question);
});

// Function to handle question input and find the closest matching FAQ
function getAnswer() {
    const input = document.getElementById('questionInput').value.trim().toLowerCase();

    // Log the input to see what is being processed
    console.log("User input:", input);

    // Check for important keywords (like JCP) first
    if (input.includes("jcp") && input.includes("month")) {
        const matchedFAQ = faqData.find(faq => faq.question.toLowerCase().includes("jcp"));
        document.getElementById('answer').innerText = matchedFAQ ? matchedFAQ.answer : "Sorry, I don't have an answer for that.";
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
