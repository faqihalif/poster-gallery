import React, { useEffect } from 'react'
import Image from "next/image"
import Dialog from '../../../components/Dialog'

const posterDialog = props => {
    const { show, setShow, size, poster } = props
    console.log(poster.file)

    return (
        <React.Fragment>
            <Dialog
                show={show}
                setShow={setShow}
                size={size}
            >
                <div className="px-4 py-2 space-y-4 divide-y">
                    <div className="pb-2">
                        <Image
                            src={poster.file}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            priority
                            alt=""
                        />
                    </div>
                </div>
            </Dialog>
        </React.Fragment >
    )
}


export default posterDialog