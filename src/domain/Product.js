/* eslint-disable camelcase */
import Evaluation from './Evaluation';

export default class Product {

  constructor({ id, title, description, image, price_cents, evaluation, ingredient_groups }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.unitPrice = price_cents;
    this.ingredients = ingredient_groups;
    this.evaluation = new Evaluation(evaluation);
  }

  static sampleRandom(limit = 1) {
    const images = [
      'http://www.pizzasdonatello.com.br/imagens/slides/7867e857eef46fd12dfbd2105dc4e3e6.jpg',
      'http://www.pizzasdonatello.com.br/imagens/slides/9cc5504d77423192510d02e0f3f798ee.jpg',
      'http://www.pizzasdonatello.com.br/imagens/slides/6f2bc52315cfb4f7713f2d181122248c.jpg',
      'data:image/jpeg;base64,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',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwIpUOX8Lof7AZhlJzV4JSnjPi_3zbNhH550LUYLlG2Xy-Oxh',
    ];
    const titles = [
      'Pizza Queijo mussarela e tomates frescos e massa média caseira',
      'Pizza doce de Figo e pessego',
      'Lasanha presunto e queijo cremoso',
      'Refrigerante Soda',
      'Refrigerante 2 Litros',
    ];

    const products = [];
    const description = () => {
      let r = 'Lorem ipsum dolor sit amet';
      const rnd = Math.floor(Math.random() * 4);
      if (rnd % 2 === 0) r += ', consectetur adipiscing elit';
      if (rnd % 3 === 0) r += ', sed do eiusmod tempor incididunt ut labore';
      if (rnd % 4 === 0) r += ', fusce ultrices quam id semper dictum';
      return r;
    };
    for (let x = 0; x < limit; x += 1) {
      const evaluation = new Evaluation({
        score: (Math.random() * 100).toFixed(0),
        evaluationCount: (Math.random() * Math.random() * 5000).toFixed(0),
      });

      const ingredients = [
        {
          standard: true,
          title: 'padrões deste prato',
          items: [
            { name: 'Tomate', checked: true, id: 1 },
            { name: 'Azeite', checked: true, id: 2 },
          ],
        },
        {
          title: 'Queijos Adicionais',
          items: [
            { name: 'Queijo Gouda', additionalPrice: 1.40, id: 5 },
            { name: 'Queijo Gorgonzola', additionalPrice: 1.40, id: 10 },
            { name: 'Queijo Emental', additionalPrice: 1.40, id: 11 },
          ],
        },
      ];

      const index = Math.floor((Math.random() * (limit - 1)) + 1) % titles.length;
      const sampleData = {
        id: x,
        title: titles[index].slice(0, 50),
        description: description().slice(0, 70),
        image: images[index],
        unitPrice: (Math.random() * 30) + 9,
        ingredients,
        evaluation,
      };

      products.push(new Product(sampleData));
    }

    return products;
  }

  static sample(limit = 999) {
    const ingredientsPizza = [
      {
        standard: true,
        title: 'padrões deste prato',
        items: [
          { name: 'Tomate', checked: true, id: 1 },
          { name: 'Azeite', checked: true, id: 2 },
        ],
      },
      {
        title: 'Queijos Adicionais',
        items: [
          { name: 'Queijo Gouda', additionalPrice: 1.20, id: 5 },
          { name: 'Queijo Gorgonzola', additionalPrice: 1.50, id: 10 },
          { name: 'Queijo Emental', additionalPrice: 1.70, id: 11 },
        ],
      },
    ];
    const ingredientsPizzaDoce = [
      {
        standard: true,
        title: 'padrões deste prato',
        items: [
          { name: 'Figo', checked: true, id: 3 },
          { name: 'Pessego', checked: true, id: 4 },
        ],
      },
      {
        title: 'Queijos Adicionais',
        items: [
          { name: 'Queijo Gouda', additionalPrice: 1.20, id: 5 },
          { name: 'Queijo Gorgonzola', additionalPrice: 1.50, id: 10 },
          { name: 'Queijo Emental', additionalPrice: 1.70, id: 11 },
        ],
      },
    ];

    const products = [];
    // PIZZAS
    products.push(new Product({
      id: 10,
      title: 'Pizza Queijo mussarela e tomates frescos e massa média caseira',
      description: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore',
      image: 'http://www.pizzasdonatello.com.br/imagens/slides/7867e857eef46fd12dfbd2105dc4e3e6.jpg',
      unitPrice: 17.9,
      ingredients: ingredientsPizza,
      evaluation: new Evaluation({
        score: (Math.random() * 100).toFixed(0),
        evaluationCount: (Math.random() * Math.random() * 5000).toFixed(0),
      }),
    }));

    products.push(new Product({
      id: 20,
      title: 'Pizza doce de Figo e pessego',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      image: 'http://www.pizzasdonatello.com.br/imagens/slides/9cc5504d77423192510d02e0f3f798ee.jpg',
      unitPrice: 18.9,
      ingredients: ingredientsPizzaDoce,
      evaluation: new Evaluation({
        score: (Math.random() * 100).toFixed(0),
        evaluationCount: (Math.random() * Math.random() * 5000).toFixed(0),
      }),
    }));

    products.push(new Product({
      id: 30,
      title: 'Lasanha presunto e queijo cremoso',
      description: 'Lorem ipsum dolor sit adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      image: 'http://www.pizzasdonatello.com.br/imagens/slides/6f2bc52315cfb4f7713f2d181122248c.jpg',
      unitPrice: 22.9,
      ingredients: ingredientsPizza,
      evaluation: new Evaluation({
        score: (Math.random() * 100).toFixed(0),
        evaluationCount: (Math.random() * Math.random() * 5000).toFixed(0),
      }),
    }));

    products.push(new Product({
      id: 54,
      title: 'Refrigerante Soda',
      description: 'Lorem ipsum dolor sit adipiscing elit',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAGMARgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABwIFAQMGBAj/xAA4EAABAwMCAwYDBQgDAAAAAAABAgMRAAQFBiESMUEHEyIyUXEUYcEVU4GhwiMkM0JikZKxQ3KC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQBAgYDBf/EACkRAAICAgECBAYDAAAAAAAAAAABAgMEESESMTJBUXETYYGhsfAFFCL/2gAMAwEAAhEDEQA/AHjRUd/SqPVGo7fTrbL2QcNvbur7tL3dFwccEwQDI2SelBKTb0i+opXL1+t1w93qfBNtnijiZdQoenNJrLWtnCmV6rwhXG4DgAmeQlG23vVeov8ADkNCilaNbXSXUKGqMCpBJ40OPjwjpBCPF+XKop1mGlrW5rPGIBVxcCSXQfl/D8I9jUdXyD4bGpRS0su01h27Ysmru2yV28ru2mrS3WkuLPIcSyAPc0x2i4ptCnGwhZSCpIM8J6iasnso00bKKjv6UVJBKuF7ZLZL+juNaQe4umliekyn9Vd1XNdotsLvRmTaUoIAQlziI8vCtKp/Kqy8LO2M0roN+qEAlhkjdlB/8ipC1t/uGv8AAVYN2TMGbpPl23Tz2283P8vnXkHOkHs28I1y8vsalWlv9w3/AI153rW3jZlA9hXtcUElKYUpSzwoQhJUpR9ABuTW96zbRapXdourVwgz3zZRvvAhQB9OcCrQUn2F8mzHr/zLSf0I9nVo2vtEwSUJj9utUf8AVtavpX0wKQXZVZW69e2bzV02+WWXl8KI28JTPP8Aq2994p+inIduTKZji7X09goooq4qFVeqLf4nTeVZTPEuzdAjnPAYq0moPNh1pbavKtJSfxoJi9NM+ZGLh0tiHFwQOtZFaWEKbQG1+ZHhV7jY17bexvbu5trWzY47i6cDbIUYBMSSfkBJJ9BXnabejduyFcOuXCLDSWWtcFqi0yOQT+6htbK3PuCuIc9hEH5KNMHOX2cZzzNu1bWz+JuElXxSCUqZgTCtyDO0ERM/LeoHZ/pllacbktUPKy60glpu4ZbMkfytlJMe81ouwdJWDun87fLdxbrLibG8AKVpTEFkxMKAMpI57jaAKdri4x0zIZ19eRc7K98+pDswyas32iXT4b4LdjHuhshfFxy6iFHYRInanNSV7AWicvmHVDxN2zKDt6lR/TTqmrxe0L3RUZ9KCiiipORGDWTWaDQB81Zhr4fO5RiI7u9eSB8g4qrvRWqsRg9Qs/bDyGkrZ7lDp5MqMCVCdgQImPfbl5NfN/DazzSQP+YOAevEhKvrXUnUtropjHYS3wyLxpVk3cXjneBCnVLmSAQQo7E7kdBStaSm2/I0ebbKeNXXCO3JfjTNWptKZS2L+Uxy/tiyfUp/9knjeHFzMcUOD0I3HICKpdeuvMYHTmIv1FWQZZFw+CriKPCUAEncnxKE9eA10OZuzg8Raao0NcobxN06EXWNdQe4ClGOJKObauLwqCY3M9DK5zd/c5S/uMhfKSq4fIKuAEJSAICUgkwAPqetdZtRXuIYddl8ouXhh+6GN2BMwznbiPM6y3PsFH9VNkg9IpadgzRTprIvEfxMgoA+oDaPrNMyrx7COQ92y9yMH5f3oqVFWOIVGd+dSrED0oAUmt8Ixku0L4ZVwphd4y2ouBMhACTJ9OSDzNV+KtsZrbD2VurIossxj0G1auVI4m7xlJ2IBI44+RlJnod7btQuPsrWmGyXdlxHcFLjYPnSFEKHvwuGoHJ47Uuns9jW8WljTmMsP3a4cQQUupSVCEnlGxjn6+aK5RS20ehdO2NdU0+EuH6PbRUasfsMPpq00fjL1N+6i4+Jv7hIHClXEVhOxIBKuHw7wE78xPLqYtXLZJWFd4QZKeKSd49QOm/+uuhtIQ0lIQlG3lSIAry3a1BJhRH40u59Uj3q8T+vQ1vbfLY8ex+3bt9FtllRUh25eXxHr4uH0EeXl0ruBXIdk7BZ7PsSlRkrS47J/rdWr6119OLsZSx7m2FFFFSUCaKjBnpUqAFt2x4u4vG8Zd2zanPh+9StKRJIVwn8Y4eXv6UuW3Mp9kLsGnnPs59wPuMI4TxkAbk842SY5SB+P0XcMNXLSmn20uNq5pUJFc9faMxl0tSy2OJXMqBk7EbqBClbE+YmuM623uLPUxc+FdaqtjtJ7QjvhbhUgMuSOhSR0n+9Vdy2txXdtpKln+UU+k6Cx4WFEgxMbKETziFbTXvxejcNjVhxq0bUsEESkASOW3X5TMVzjQ0+R7I/ma5xajF7NmhrV2y0fh7a4b7t1q0QlaT0Mb1eTWawQaaM83vkzNFRg/KigglRRRQAUUUUAFFFFABRRRQAUUUUAf/Z',
      unitPrice: 4.9,
      ingredients: [],
      evaluation: new Evaluation({
        score: (Math.random() * 100).toFixed(0),
        evaluationCount: (Math.random() * Math.random() * 5000).toFixed(0),
      }),
    }));

    products.push(new Product({
      id: 57,
      title: 'Refrigerante 2 Litros',
      description: 'Lorem ipsum dolor sit adipiscing elit',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwIpUOX8Lof7AZhlJzV4JSnjPi_3zbNhH550LUYLlG2Xy-Oxh',
      unitPrice: 9.9,
      ingredients: [],
      evaluation: new Evaluation({
        score: (Math.random() * 10).toFixed(0),
        evaluationCount: (Math.random() * Math.random() * 5000).toFixed(0),
      }),
    }));

    return products.slice(0, Math.min(limit, products.length));
  }
}
