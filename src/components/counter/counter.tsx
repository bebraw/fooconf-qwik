import { component$, useStore } from '@builder.io/qwik';

export default component$(({ target }: { target: string }) => {
  const state = useStore({
    count: 0,
  });

  return (
    <div>
      <div>
        Count {target}: {state.count}
      </div>
      <button onClick$={() => state.count++}>Add one</button>
    </div>
  );
});
