import React from "react"
import { Helmet } from "react-helmet"

const ChatEmbed = () => {
    return (
        <Helmet>
            {/* <script src="https://www.chatbase.co/embed.min.js" chatbotId="fJrHLEqumXUBgG7gduOn0" domain="www.chatbase.co" defer></script> */}
            {/* <script type="text/javascript">
        ;(function (d, t) {
            var v = d.createElement(t),
                s = d.getElementsByTagName(t)[0]
            v.onload = function () {
                window.voiceflow.chat.load({
                    verify: { projectID: "667efe43e5cc8d5a514824af" },
                    url: "https://general-runtime.voiceflow.com",
                    versionID: "production",
                })
            }
            v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"
            v.type = "text/javascript"
            s.parentNode.insertBefore(v, s)
        })(document, "script")
    </script> */}
            <script type="text/javascript">
                {`
          (function(d, t) {
            var v = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: "667efe43e5cc8d5a514824af" },
                url: "https://general-runtime.voiceflow.com",
                versionID: "production"
              });
            };
            v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
            v.type = "text/javascript";
            s.parentNode.insertBefore(v, s);
          })(document, "script");
          `}
            </script>
        </Helmet>
    )
}

export default ChatEmbed
