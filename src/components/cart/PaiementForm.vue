<template>
    <div class="paiement-form">
        <h2>Informations de paiment</h2>
        <div class="form-row">
            <div class="form-input">
                <p>Name</p>
                <input name="name" type="text">
            </div>
            <div class="form-input">
                <p>Email</p>
                <input name="email" type="email">
            </div>
        </div>
        <div class="form-row">
            <div class="form-input">
                <p>Numéro de carte</p>
                <input name="number" type="text">
            </div>
        </div>
        <div class="form-row">
            <div class="form-input">
                <p>Mois</p>
                <input name="month" type="text">
            </div>
            <div class="form-input">
                <p>Année</p>
                <input name="year" type="text">
            </div>
            <div class="form-input">
                <p>CVV</p>
                <input name="cvv" type="password">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.paiement-form {
    padding: 24px;

    box-shadow: var(--main-shadow);

    h2 {
        margin-bottom: 32px;
    }

    .form-row {
        display: flex;

        width: 100%;
        gap: 24px;

        .form-input {
            flex-grow: 1;
            margin-bottom: 24px;

            p {
                margin-bottom: 10px;
            }

            input {
                width: 100%;
                height: 2rem;
                padding: 5px;

                border-radius: 4px;
                border: 1px solid var(--grey-500);

                &:hover {
                    border-color: var(--grey-900);
                }
            }
        }
    }
}
</style>