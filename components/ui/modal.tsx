'use client'
import { Fragment } from 'react'
import {  XIcon } from 'lucide-react'
import { Dialog, Transition } from '@headlessui/react'

import { IconButton } from '@/components/icon-button'

type ModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}
export const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-blackMine bg-opacity-50" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-lg text-left align-middle shadow-xl transition-all">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <div className="absolute top-4 right-4">
                    <IconButton
                      onClick={onClose}
                      icon={<XIcon className="w-5 h-5 text-white" />}
                    />
                  </div>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
