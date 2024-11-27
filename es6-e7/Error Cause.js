try {
    throw new Error('Oops', { cause: 'Bad Input' });
} catch (e) {
    console.log(e.cause); // Bad Input
}
