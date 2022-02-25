import del from "del";

export const resetBuildFolder = () => {
    return del(app.path.buildFolder);
}
