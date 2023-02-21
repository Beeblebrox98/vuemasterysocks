app.component("review-form", {
    template:
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
            <h3>Оставьте отзыв</h3>
            <label for="name">Имя:</label>
            <input id="name" v-model="name">

            <label for="review">Отзыв:</label>      
            <textarea id="review" v-model="review"></textarea>

            <label for="rating">Оцените товар:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>

            <label for="recommendation">Рекомендуете ли вы этот товар?</label>
            <select id="recommendation" v-model="recommendation">
                <option>Да</option>
                <option>Нет</option>
            </select>

            <input class="button" type="submit" value="Submit">
        </form>`,
    data() {
        return {
            name: "",
            review: "",
            rating: null,
            recommendation: null,
        }
    },
    methods: {
        onSubmit() {
            if (this.name === "" || this.review === "" || this.rating === null || this.recommendation === null) {
                alert("Отзыв не отправлен. Пожалуйста, заполните все поля.")
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommendation: this.recommendation,
            }
            this.$emit("review-submitted", productReview)

            this.name = " "
            this.review = " "
            this.rating = null
            this.recommendation = null
        }
    }
})