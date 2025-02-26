import { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import './contactForm.scss';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
  const navigate = useNavigate();
  const { language } = useSelector((state: RootState) => state.languageState);

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const response = await fetch('https://formspree.io/f/mvgzjjdr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      Swal.fire({
        title: language === 'english' ? 'Success' : 'Éxito',
        text:
          language === 'english'
            ? 'Thank you for your message! We will contact you soon.'
            : '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
        icon: 'success',
        confirmButtonText: language === 'english' ? 'Great' : 'Genial',
      });
      navigate('/');
    } else {
      Swal.fire({
        title: language === 'english' ? 'Error' : 'Error',
        text:
          language === 'english'
            ? 'Oops! Something went wrong.'
            : '¡Ups! Algo salió mal.',
        icon: 'error',
        confirmButtonText:
          language === 'english' ? 'Try again' : 'Intenta de nuevo',
      });
      navigate('/');
    }
  };

  return (
    <section className="contact-us-page-form">
      <form
        className="contact-us-form"
        data-testid="form"
        onSubmit={handleSubmit}
      >
        <div className="contact-form-info">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder={language === 'english' ? 'NAME' : 'NOMBRE'}
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="surname"
              placeholder={language === 'english' ? 'SURNAME' : 'APELLIDO'}
              required
              value={formData.surname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="E-MAIL"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              placeholder={
                language === 'english' ? 'PHONE NUMBER' : 'NÚMERO DE TELÉFONO'
              }
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <textarea
            className="message"
            name="message"
            placeholder={language === 'english' ? 'MESSAGE' : 'MENSAJE'}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="send-message-button">
          <p>
            {language === 'english'
              ? 'By submitting the form, you '
              : 'Al enviar el formulario '}
            <a>
              {language === 'english'
                ? 'accept the privacy policy'
                : 'aceptas política de privacidad'}
            </a>
          </p>
          <button>
            {language === 'english' ? 'SEND' : 'ENVIAR'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="8"
              viewBox="0 0 31 8"
              fill="none"
            >
              <path
                d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z"
                fill="#AD57BC"
              />
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
}
