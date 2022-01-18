import Modal from 'react-modal'
import emailjs from 'emailjs-com'
import { CgClose } from 'react-icons/cg'
import { FormEmail } from './styles'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast, ToastContainer } from 'react-toastify'

interface PropsModal {
  modalIsOpen: boolean
  closeModal: () => void
}

export function ModalSendEmail({ modalIsOpen, closeModal }: PropsModal) {
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const { t } = useTranslation()

  async function sendEmail(event: any) {
    setIsLoading(true)
    event.preventDefault()

    await emailjs
      .sendForm(
        'gmailMessagePort',
        'template_97ov6lp',
        event.target,
        'user_exfquLUGzbuWFJW29v7co',
      )
      .then(
        (result) => {
          toast.success(t('Mensagem enviada!'), {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            theme: 'dark',
            closeOnClick: true,
            closeButton: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          setIsLoading(false)
        },
        (error) => {
          toast.error(error.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            theme: 'dark',
            closeOnClick: true,
            closeButton: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          setIsLoading(false)
        },
      )
  }

  function handleOnChange(value: any) {
    setIsVerified(true)
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <button type="button" onClick={closeModal} className="react-modal-close">
        <CgClose className="closeModal" />
      </button>
      <h1>{t('Entre em contato')}</h1>
      <FormEmail onSubmit={sendEmail}>
        <input name="name" type="text" placeholder={t('Nome')} required />
        <input name="email" type="text" placeholder="Email" required />
        <textarea
          name="message"
          placeholder={t('Digite a mensagem aqui')}
          required
        ></textarea>
        <ReCAPTCHA
          sitekey="6Lf05RgeAAAAAHg4gzkp6752Sq-a7_S1YWDIfwVw"
          onChange={handleOnChange}
        />
        <div>
          <input type="reset" value={String(t('Resetar'))} />
          {isLoading ? (
            <div className="loading">
              <div></div>
            </div>
          ) : (
            <input
              disabled={!isVerified}
              type="submit"
              value={String(t('Enviar'))}
            />
          )}
        </div>
        <ToastContainer />
      </FormEmail>
    </Modal>
  )
}
