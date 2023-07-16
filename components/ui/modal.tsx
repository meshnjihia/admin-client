'use client'

type ModalProps = {
    open: boolean
    onClose: () => void
    children: React.ReactNode
}
export const Modal = ({ open, onClose, children }: ModalProps) => {
    return (
        <div>
            {children}
        </div>
    )
}


