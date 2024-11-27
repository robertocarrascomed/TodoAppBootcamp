import {render, screen, fireEvent} from '@testing-library/react-native';
import TodoScreen from '../src/Screens/TodoScreen';

describe('TodoScreen', () => {
  it('should add a task', async () => {
    const {findByTestId, findByText} = render(<TodoScreen />);
    fireEvent.changeText(await findByTestId('taskInput'), 'New Task');
    fireEvent.press(await findByTestId('addButton'));
    expect(await findByText('New Task')).toBeDefined();
  });

  it('should complete a task', () => {
    const {getByTestId, getAllByText, getByText} = render(<TodoScreen />);

    fireEvent.changeText(getByTestId('taskInput'), 'New Task');
    fireEvent.press(getByTestId('addButton'));

    fireEvent.changeText(getByTestId('taskInput'), 'Other Task');
    fireEvent.press(getByTestId('addButton'));

    fireEvent.changeText(getByTestId('taskInput'), 'Other Task 2');
    fireEvent.press(getByTestId('addButton'));

    const listButtonsComplete = getAllByText('Complete');

    fireEvent.press(listButtonsComplete[0]);
    fireEvent.press(listButtonsComplete[2]);

    expect(getByText('New Task').props.style.textDecorationLine).toBe(
      'line-through',
    );
    expect(getByText('Other Task').props.style.textDecorationLine).toBe('none');
    expect(getByText('Other Task 2').props.style.textDecorationLine).toBe(
      'line-through',
    );
  });

  it('should delete a task', async () => {
    const {getByTestId, getAllByText, getByText, queryByText} = render(
      <TodoScreen />,
    );

    fireEvent.changeText(getByTestId('taskInput'), 'New Task');
    fireEvent.press(getByTestId('addButton'));

    fireEvent.changeText(getByTestId('taskInput'), 'Other Task');
    fireEvent.press(getByTestId('addButton'));

    fireEvent.changeText(getByTestId('taskInput'), 'Other Task 2');
    fireEvent.press(getByTestId('addButton'));

    const listButtonsDelete = getAllByText('Delete');

    fireEvent.press(listButtonsDelete[0]);
    fireEvent.press(listButtonsDelete[1]);

    expect(queryByText('New Task')).toBeNull();
    expect(queryByText('Other Task')).toBeNull();
    expect(getByText('Other Task 2')).toBeDefined();
  });
});
