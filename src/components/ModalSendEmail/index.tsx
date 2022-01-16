import Modal from 'react-modal'
import { useForm, SubmitHandler } from 'react-hook-form'
import { CgClose } from 'react-icons/cg'
import { FormEmail } from './styles'

interface PropsModal {
  modalIsOpen: boolean
  closeModal: () => void
}

export function ModalSendEmail({ modalIsOpen, closeModal }: PropsModal) {
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
      <h1>Entre em contato</h1>
      <FormEmail action="">
        <input type="text" placeholder="Nome" required />
        <input type="text" placeholder="Email" required />
        <textarea
          name="textEmail"
          id="textEmail"
          placeholder="Digite o texto aqui"
          required
        ></textarea>
        <div>
          <input type="reset" value="Apagar" />
          <input type="submit" value="Enviar" />
        </div>
      </FormEmail>
    </Modal>
  )
}
