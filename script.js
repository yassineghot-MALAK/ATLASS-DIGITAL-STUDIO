
document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Remplacez par votre numéro WhatsApp au format international,
  // sans le signe + ni les espaces. Exemple de format : 2126XXXXXXXX.
  const whatsappNumber = "212624865039";

  // Préselectionner le service lorsqu'un client clique sur une carte.
  document.querySelectorAll("[data-service]").forEach(function (link) {
    link.addEventListener("click", function () {
      const serviceSelect = document.getElementById("service");

      if (serviceSelect) {
        serviceSelect.value = link.dataset.service;
      }
    });
  });

  const contactForm = document.getElementById("contact-form");
  const statusElement = document.getElementById("form-status");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !service || !message) {
      if (statusElement) {
        statusElement.textContent = "Veuillez remplir tous les champs.";
      }
      return;
    }

    if (!whatsappNumber) {
      if (statusElement) {
        statusElement.textContent =
          "Le formulaire fonctionne. Ajoutez votre numéro WhatsApp dans script.js pour activer l'envoi.";
      }
      return;
    }

    const requestText = [
      "Bonjour Atlas Digital Studio !",
      "",
      "Nouvelle demande de service",
      "Nom : " + name,
      "E-mail : " + email,
      "Service : " + service,
      "Projet : " + message
    ].join("\n");

    const whatsappURL =
      "https://wa.me/" + whatsappNumber +
      "?text=" + encodeURIComponent(requestText);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    if (statusElement) {
      statusElement.textContent =
        "Votre demande est prête dans WhatsApp. Vérifiez le message avant de l'envoyer.";
    }
  });

  console.info("Atlas Digital Studio est prêt.");
});
