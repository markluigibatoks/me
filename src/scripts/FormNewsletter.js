import SweetAlert from "./SweetAlert";

class FormNewsletter {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);

        this.events();
        this.swal = new SweetAlert()
    }

    events() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(this.form);

            try {
                const response = await fetch(siteData.root_url + '/wp-json/wp/v1/newsletter', {
                    method: 'POST',
                    headers: {
                        'X-WP-Nonce': siteData.nonce,
                    },
                    body: formData
                });

                const data = await response.json();

                if (!response.ok) {
                    const errorMessage = data.message || response.statusText || `HTTP error! status: ${response.status}`;
                    throw new Error(errorMessage);
                }
                
                this.swal.success({
                    title: 'Success!',
                    text: 'You successfully subscribe to our newsletter!'
                })

                this.form.reset()
            } catch (error) {
                this.swal.error({
                    title: 'Oops!',
                    text: error.message
                })
            }
        });
    }
}

export default FormNewsletter