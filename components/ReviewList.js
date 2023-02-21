app.component("review-list", {
    props: {
        reviews: {
            type: Array,
            required: true,
        }
    },
    template:
        /*html*/
        `
    <div class="review-container">
    <h3>Отзывы:</h3>
        <ul>
        <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} оценил товар на {{ review.rating }} из 5 звёзд
            <br/>
            "{{ review.review }}"
            <br/>
            Рекомендуете ли вы этот товар: {{ review.recommendation }}
        </li>
        </ul>
    </div>
    `
})