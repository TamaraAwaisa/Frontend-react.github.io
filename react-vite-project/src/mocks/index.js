import { setupWorker } from 'msw/browser'
import { http, HttpResponse, delay } from 'msw';

const dataType = {
  bouquet: 'bouquet',
  basket: 'basket',
  box: 'box'
}

export const handlers = [
  http.get('/data', async () => {
    await delay();

    // const hasError = (Math.random() < 0.1) 
    // if(hasError) {
    //   HttpResponse.json({error: 'Something went wrong..'}, {status: 400});
    // }

    return HttpResponse.json({
      data: {
        [dataType.bouquet]: [
          { id: 1, title: 'Card 1', content: 'Content for card 1', price: '123$', imageUrl: '/src/assets/f1.jpg' },
          { id: 2, title: 'Card 2', content: 'Content for card 2', price: '123$', imageUrl: '/src/assets/f2.jpg' },
          { id: 3, title: 'Card 3', content: 'Content for card 3', price: '123$', imageUrl: '/src/assets/f3.jpg' },
          { id: 4, title: 'Card 4', content: 'Content for card 4', price: '123$', imageUrl: '/src/assets/f4.jpg' },
          { id: 5, title: 'Card 5', content: 'Content for card 5', price: '123$', imageUrl: '/src/assets/f5.jpg' },
          { id: 6, title: 'Card 6', content: 'Content for card 6', price: '123$', imageUrl: '/src/assets/f6.jpg' },
        ],
        [dataType.basket]: [
          { id: 1, title: 'Card 1', content: 'Content for card 1', price: '123$', imageUrl: '/src/assets/f7.jpg' },
          { id: 2, title: 'Card 2', content: 'Content for card 2', price: '123$', imageUrl: '/src/assets/f8.jpg' },
          { id: 3, title: 'Card 3', content: 'Content for card 3', price: '123$', imageUrl: '/src/assets/f9.jpg' },
          { id: 4, title: 'Card 4', content: 'Content for card 4', price: '123$', imageUrl: '/src/assets/f10.jpg' },
          { id: 5, title: 'Card 5', content: 'Content for card 5', price: '123$', imageUrl: '/src/assets/f11.jpg' },
          { id: 6, title: 'Card 6', content: 'Content for card 6', price: '123$', imageUrl: '/src/assets/f12.jpg' },
        ],
        [dataType.box]: [
          { id: 1, title: 'Card 1', content: 'Content for card 1', price: '123$', imageUrl: '/src/assets/f13.jpg' },
          { id: 2, title: 'Card 2', content: 'Content for card 2', price: '123$', imageUrl: '/src/assets/f14.jpg' },
          { id: 3, title: 'Card 3', content: 'Content for card 3', price: '123$', imageUrl: '/src/assets/f15.jpg' },
          { id: 4, title: 'Card 4', content: 'Content for card 4', price: '123$', imageUrl: '/src/assets/f16.jpg' },
          { id: 5, title: 'Card 5', content: 'Content for card 5', price: '123$', imageUrl: '/src/assets/f17.jpg' },
          { id: 6, title: 'Card 6', content: 'Content for card 6', price: '123$', imageUrl: '/src/assets/f18.jpg' },
        ],
      }
    })
  }),
]

export const worker = setupWorker(...handlers)
