export default interface IView {
  render: () => Promise<string>;
  afterRender: () => Promise<void>;
}
