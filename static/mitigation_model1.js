document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("riskForm");
    const resultBox = document.getElementById("riskResult");
  
    if (!form) {
      console.error("❌ riskForm not found.");
      return;
    }
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      try {
        const response = await fetch("/predict-risk-area", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
  
        const result = await response.json();
  
        if (result.risk) {
          resultBox.innerText = `✅ Predicted Risk Level: ${result.risk}`;
          resultBox.style.display = "block";
        } else {
          resultBox.innerText = "⚠️ Unable to predict risk.";
          resultBox.style.display = "block";
        }
      } catch (err) {
        console.error("🔥 Error submitting form:", err);
        alert("Something went wrong. Please try again.");
      }
    });
  });
  