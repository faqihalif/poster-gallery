import React from 'react'

// HeadlessUI
import { Dialog as Modal } from '@headlessui/react'

const Dialog = props => {
    const { show, setShow, size } = props

    return (
        <React.Fragment>
            <Modal as="div" className="relative z-10" open={show} onClose={() => setShow(false)}>
                <div className="fixed inset-0 bg-black opacity-50" />

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full p-4">
                        <Modal.Panel className={`w-full align-middle bg-white shadow-xl rounded ${size == 'xs' ? ('max-w-xs') : size == 'sm' ? ('max-w-sm') : size == 'md' ? ('max-w-md') : size == 'lg' ? ('max-w-lg') : size == 'xl' ? ('max-w-xl') : ('max-w-4xl')}`}>
                            {props.children}
                        </Modal.Panel>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default Dialog