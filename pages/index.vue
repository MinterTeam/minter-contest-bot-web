<script>
    import prettyNum, {PRECISION_SETTING} from 'pretty-num';
    import {getBipPrice} from '~/api/explorer.js';

    export default {
        fetchOnServer: false,
        fetch() {
            // additional check to workaround generate mode not supporting client middlewares
            // check authToken, because profile middleware doesn'nt work on generate
            return getBipPrice()
                .then((bipPrice) => {
                    this.bipPrice = bipPrice;
                });
        },
        data() {
            return {
                bipPrice: 0,
            };
        },
        methods: {
            coinPrice: (value) => prettyNum(value, {precision: 4, precisionSetting: PRECISION_SETTING.FIXED}),
        },
    }
</script>

<template>
    <div>
        <section class="rewards">
            <div class="container-large">
                <div class="bg">
                    <img class="bg__bitmap-1" src="/img/bitmap-1.png" srcset="/img/bitmap-1@2x.png 2x" alt="" role="presentation">
                    <img class="bg__bitmap-2" src="/img/bitmap-2.png" srcset="/img/bitmap-2@2x.png 2x" alt="" role="presentation">
                    <img class="bg__box" src="/img/box.png" srcset="/img/box@2x.png 2x" alt="" role="presentation">
                </div>
                <div class="rewards__content">
                    <h1 class="title-1">
                        Get BIP rewards <span class="title-1__span">for simple tasks</span>
                    </h1>
                    <div class="rewards__content-btn">
                        <a href="https://t.me/MinterContestBot?start=site" target="_blank" rel="noopener">
                            <img class="btn-icon" src="/img/icon.svg" width="28" height="23" alt="Telegram bot">
                            <div class="btn-start">Start now</div>
                        </a>
                    </div>
                    <div class="rewards__content-cta">
                        Find your personal referral link in the bot and <strong>get 10% of all your referrals</strong>
                        rewards!
                    </div>
                    <div class="rewards__content-price" v-if="!$fetchState.pending && !$fetchState.error">
                        <div class="rewards__content-price-text">
                            BIP Price on <span>Bithumb Global</span>
                        </div>
                        <div class="rewards__content-price-number">${{ coinPrice(bipPrice) }}</div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer">
            <div class="container-footer">
                <div class="rewards__links">
                    <a class="rewards__link-item rewards__links-terms" href="https://minter.org/legal/privacy.pdf">Privacy policy</a>
                    <a class="rewards__link-item rewards__links-about" href="https://minter.org" target="_blank">About Minter</a>
                </div>
            </div>
        </footer>
    </div>
</template>
