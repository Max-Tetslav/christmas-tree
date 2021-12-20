export default interface IView {
  render: () => Promise<string>;
  after_render: () => Promise<void>;
}
