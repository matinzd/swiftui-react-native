import ExpoModulesCore

public class ImageModule: Module {
  public func definition() -> ModuleDefinition {
    Name("Image")
    View(ImageExpoView.self) {
      Prop("systemName") { (view: ImageExpoView, prop: String) in
        view.props.systemName = prop
      }
      Prop("modifiers") { (view: ImageExpoView, prop: [[String: Any]]) in
        view.props.modifiers = prop
      }
    }
  }
}
