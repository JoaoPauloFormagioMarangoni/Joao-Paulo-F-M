import Modal from 'react-modal'
import emailjs from 'emailjs-com'
import { CgClose } from 'react-icons/cg'
import { FormEmail } from './styles'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface PropsModal {
  modalIsOpen: boolean
  closeModal: () => void
}

export function ModalSendEmail({ modalIsOpen, closeModal }: PropsModal) {
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation()

  async function sendEmail(event : any) {
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
          alert('Mensagem enviada! 👌')
        },
        (error) => {
          alert(error.message)
        },
      )
    setIsLoading(false)
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
      <h1>{t("Entre em contato")}</h1>
      <FormEmail onSubmit={sendEmail}>
        <input name="name" type="text" placeholder={t("Nome")} required />
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          placeholder={t("Digite a mensagem aqui")}
          required
        ></textarea>
        <div>
          <input type="reset" value={String(t("Resetar"))} />
          {isLoading ? (
            <div className="loading">
              <div></div>
            </div>
          ):(
            <input type="submit" value={String(t("Enviar"))} />
          )}
        </div>
      </FormEmail>
    </Modal>
  )
}
