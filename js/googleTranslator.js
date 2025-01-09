function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,hi',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      'google_translate_element'
    );
  }

  const script = document.createElement('script');
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.head.appendChild(script);

  // Toggle Button Functionality
  const toggleSwitch = document.getElementById('language-toggle');
  const languageLabel = document.getElementById('language-label');
  let translateDropdown;

  // Wait for Google Translate dropdown to be available
  const checkDropdown = () => {
    translateDropdown = document.querySelector('#google_translate_element select');
    if (!translateDropdown) {
      setTimeout(checkDropdown, 500); // Retry after 500ms if not yet available
    }
  };

  checkDropdown(); // Start checking for the dropdown

  toggleSwitch.addEventListener('change', () => {
    const lang = toggleSwitch.checked ? 'hi' : 'en';

    if (translateDropdown) {
      for (let option of translateDropdown.options) {
        if (option.value === lang) {
          translateDropdown.value = lang;
          translateDropdown.dispatchEvent(new Event('change'));
          break;
        }
      }
    }

    // Update button label
    languageLabel.textContent = toggleSwitch.checked
      ? 'Switch to English'
      : 'Switch to Hindi';
  });