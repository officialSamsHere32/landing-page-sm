from PIL import Image
import sys


def remove_white_bg(in_path, out_path, thresh=240):
    img = Image.open(in_path).convert("RGBA")
    datas = img.getdata()
    new_data = []
    for item in datas:
        r, g, b, a = item
        if r >= thresh and g >= thresh and b >= thresh:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append((r, g, b, a))
    img.putdata(new_data)
    img.save(out_path, "PNG")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python remove_white_bg.py input.jpg output.png [threshold]")
        sys.exit(1)
    in_p = sys.argv[1]
    out_p = sys.argv[2]
    t = int(sys.argv[3]) if len(sys.argv) > 3 else 240
    remove_white_bg(in_p, out_p, t)
    print("Saved:", out_p)
