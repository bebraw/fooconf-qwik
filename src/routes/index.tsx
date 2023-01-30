import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// import { Link } from '@builder.io/qwik-city';
import Counter from '../components/counter/counter'

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to fooconf demo <span class="lightning">⚡️</span>
      </h1>
      <Counter target="foo" />
      <Counter target="bar" />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
