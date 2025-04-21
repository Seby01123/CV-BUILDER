document.addEventListener("DOMContentLoaded", function () {
  const preview = document.getElementById("cv-preview");

  // Actualizare câmpuri simple
  document.querySelector('input[name="fullname"]').addEventListener("input", function (e) {
    document.getElementById("preview-name").innerText = e.target.value || "Numele tău";
  });

  document.querySelector('input[name="email"]').addEventListener("input", function (e) {
    document.getElementById("preview-email").innerText = e.target.value || "-";
  });

  document.querySelector('input[name="phone"]').addEventListener("input", function (e) {
    document.getElementById("preview-phone").innerText = e.target.value || "-";
  });

  document.querySelector('input[name="address"]').addEventListener("input", function (e) {
    document.getElementById("preview-address").innerText = e.target.value || "-";
  });

  document.querySelector('textarea[name="skills"]').addEventListener("input", function (e) {
    document.getElementById("preview-skills").innerText = e.target.value || "-";
  });

  // Dinamica pentru educație și experiență
  document.querySelectorAll('input[name="education[]"]').forEach(function(input) {
    input.addEventListener("input", updateEducationPreview);
  });

  document.querySelectorAll('input[name="experience[]"]').forEach(function(input) {
    input.addEventListener("input", updateExperiencePreview);
  });

  function updateEducationPreview() {
    let educationText = "";
    document.querySelectorAll('input[name="education[]"]').forEach(function(input) {
      educationText += input.value + "<br>";
    });
    document.getElementById("preview-education").innerHTML = educationText || "-";
  }

  function updateExperiencePreview() {
    let experienceText = "";
    document.querySelectorAll('input[name="experience[]"]').forEach(function(input) {
      experienceText += input.value + "<br>";
    });
    document.getElementById("preview-experience").innerHTML = experienceText || "-";
  }

  // Schimbare culoare fundal în preview
  document.getElementById("bg-color-picker").addEventListener("change", function (e) {
    preview.style.backgroundColor = e.target.value;
  });

  // Schimbare culoare text în preview
  document.getElementById("text-color-picker").addEventListener("change", function (e) {
    const color = e.target.value;

    // Aplică culoarea textului doar în preview
    preview.style.color = color;

    // Schimbă culoarea titlurilor și a altor elemente din preview
    const titles = document.querySelectorAll("#cv-preview h3, #cv-preview h1, #cv-preview p");
    titles.forEach(function (title) {
      title.style.color = color;
    });

    // Aplica culoarea și la elementele din secțiunea Date de contact (Email, Telefon, Adresă)
    document.getElementById("preview-email").style.color = color;
    document.getElementById("preview-phone").style.color = color;
    document.getElementById("preview-address").style.color = color;

    // Dacă vrei să schimbi și culoarea titlurilor secțiunilor din Preview
    const sectionTitles = document.querySelectorAll("#cv-preview .cv-section h3");
    sectionTitles.forEach(function (title) {
      title.style.color = color;
    });
  });

  // Dark Mode pentru preview
  document.getElementById("dark-mode-toggle").addEventListener("change", function (e) {
    const currentTextColor = document.getElementById("text-color-picker").value;

    if (e.target.checked) {
      preview.style.backgroundColor = "#121212";
      if (currentTextColor === "#000000") {
        preview.style.color = "#ffffff";
        document.getElementById("text-color-picker").value = "#ffffff";
      } else {
        preview.style.color = currentTextColor;
      }
    } else {
      preview.style.backgroundColor = document.getElementById("bg-color-picker").value;
      preview.style.color = document.getElementById("text-color-picker").value;
    }

    // Actualizează culoarea titlurilor și a altor elemente din preview
    const titles = document.querySelectorAll("#cv-preview h3, #cv-preview h1, #cv-preview p");
    titles.forEach(function (title) {
      title.style.color = preview.style.color;
    });

    // Aplica culoarea și la câmpurile de date personale din preview (email, telefon, adresă)
    document.getElementById("preview-email").style.color = preview.style.color;
    document.getElementById("preview-phone").style.color = preview.style.color;
    document.getElementById("preview-address").style.color = preview.style.color;

    // Aplica culoarea și la titlurile secțiunilor din preview
    const sectionTitles = document.querySelectorAll("#cv-preview .cv-section h3");
    sectionTitles.forEach(function (title) {
      title.style.color = preview.style.color;
    });
  });
});

// Funcții pentru câmpuri dinamice
function addEducation() {
  const container = document.getElementById("education-section");
  const input = document.createElement("input");
  input.type = "text";
  input.name = "education[]";
  input.placeholder = "Ex: Universitatea...";
  input.required = true;
  container.appendChild(input);
  input.addEventListener("input", updateEducationPreview);
}

function addExperience() {
  const container = document.getElementById("experience-section");
  const input = document.createElement("input");
  input.type = "text";
  input.name = "experience[]";
  input.placeholder = "Ex: Web Developer la XYZ...";
  input.required = true;
  container.appendChild(input);
  input.addEventListener("input", updateExperiencePreview);
}

function downloadPDF() {
  const element = document.getElementById('cv-preview');
  const opt = {
    margin: 0.5,
    filename: 'cv_meu.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save().then(() => {
    document.getElementById("cv-form").reset();
    document.getElementById("preview-name").innerText = "Numele tău";
    document.getElementById("preview-email").innerText = "-";
    document.getElementById("preview-phone").innerText = "-";
    document.getElementById("preview-address").innerText = "-";
    document.getElementById("preview-education").innerText = "-";
    document.getElementById("preview-experience").innerText = "-";
    document.getElementById("preview-skills").innerText = "-";

    const preview = document.getElementById("cv-preview");
    preview.style.backgroundColor = "#ffffff";
    preview.style.color = "#333";

    document.getElementById("bg-color-picker").value = "#ffffff";
    document.getElementById("text-color-picker").value = "#000000";
    document.getElementById("dark-mode-toggle").checked = false;

    document.getElementById("education-section").innerHTML = '<input type="text" name="education[]" placeholder="Ex: Universitatea..." required>';
    document.getElementById("experience-section").innerHTML = '<input type="text" name="experience[]" placeholder="Ex: Web Developer la XYZ..." required>';
  });
}
