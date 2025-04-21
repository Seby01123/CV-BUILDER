<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <title>CV Builder - Creează CV-ul tău</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
</head>
<body>
  <div class="container-flex">
    <!-- FORMULAR -->
    <div class="form-side">
      <h1>Creează-ți propriul CV</h1>
      <form onsubmit="event.preventDefault(); return false;" id="cv-form">

        <h2>Date personale</h2>
        <label>Nume complet:</label>
        <input type="text" name="fullname">

        <label>Email:</label>
        <input type="email" name="email">

        <label>Telefon:</label>
        <input type="text" name="phone">

        <label>Adresă:</label>
        <input type="text" name="address">

        <h2>Setări vizuale</h2>

        <label>Alege culoarea fundalului CV-ului:</label>
        <input type="color" id="bg-color-picker" value="#ffffff">
        <br>
        <label>Culoare text CV:</label>
        <input type="color" id="text-color-picker" value="#000000">
        <br>
        <label>Mod întunecat:</label>
        <input type="checkbox" id="dark-mode-toggle">

        <h2>Educație</h2>
        <div id="education-section">
          <input type="text" name="education[]" placeholder="Ex: Universitatea...">
        </div>
        <button type="button" onclick="addEducation()">+ Adaugă educație</button>

        <h2>Experiență profesională</h2>
        <div id="experience-section">
          <input type="text" name="experience[]" placeholder="Ex: Web Developer la XYZ...">
        </div>
        <button type="button" onclick="addExperience()">+ Adaugă experiență</button>

        <h2>Competențe</h2>
        <textarea name="skills" rows="4" placeholder="Ex: HTML, CSS, PHP, JavaScript..."></textarea>

        <br><br>
        <button onclick="downloadPDF()">📄 Descarcă CV-ul (PDF)</button>
      </form>
    </div>

    <!-- PREVIEW -->
    <div class="preview-side">
      <h2>Preview CV</h2>
      <div id="cv-preview">
        <h1 id="preview-name" class="cv-header">Numele tău</h1>

        <div class="cv-section">
          <h3>Date de contact</h3>
          <p><strong>Email:</strong> <span id="preview-email">-</span></p>
          <p><strong>Telefon:</strong> <span id="preview-phone">-</span></p>
          <p><strong>Adresă:</strong> <span id="preview-address">-</span></p>
        </div>

        <div class="cv-section">
          <h3>Educație</h3>
          <p><span id="preview-education">-</span></p>
        </div>

        <div class="cv-section">
          <h3>Experiență profesională</h3>
          <p><span id="preview-experience">-</span></p>
        </div>

        <div class="cv-section">
          <h3>Competențe</h3>
          <p><span id="preview-skills">-</span></p>
        </div>
      </div>
    </div>
  </div>

  <script src="preview.js"></script>
</body>
</html>
