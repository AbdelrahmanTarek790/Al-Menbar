import React from "react"

const SupportContact = () => {
    return (
        <div className="mt-16 mb-14">
            <p className="text-center text-4xl  lg:text-5xl font-extrabold text-[#2A3E34]">الدعم الاكاديمي</p>
            <p className="text-center text-2xl lg:text-3xl mt-6 text-[#2A3E34]">محمد مساعدك الالي للدعم الفني والاكاديمي موجود هنا لمساعدتك</p>

            <iframe
                src="https://www.chatbase.co/chatbot-iframe/AteBIBV12Zn_Ji3VWD_qz"
                width="100%"
                className="mx-auto h-[90vh] max-h-[720px] rounded-lg mt-8 "
                style={{ width: "95%", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}
                frameborder="0"
            ></iframe>
            {/* <iframe
                title="Voiceflow Chat Widget"
                src={`https://general-runtime.voiceflow.com/widget/667efe43e5cc8d5a514824af`}
                width="100%"
                height="600"
                frameBorder="0"
                allow="microphone"
            ></iframe> */}
        </div>
    )
}

export default SupportContact
