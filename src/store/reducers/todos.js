/**
 * O reducer vai sempre ouvir quando uma action for disparada
 * Quem dispara essa action é o componente significando que alguma ação precisa ser feita
 * Então o reducer vai alterar o estado
 * Todos os reducers vao ouvir todas as actions no redux
 * @param {* como o estado esta antes da alteração} state
 * @param {* a action que foi disparada pela aplicação, toda action tem uma informação que é o type} action
 */

const INITIAL_STATE = [{ id: 1, text: 'Fazer Café' }, { id: 2, text: 'Estudar React' }];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
