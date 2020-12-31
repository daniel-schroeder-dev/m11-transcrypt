#!/home/daniel/Public/cwhq/src/wizardlib-transcrypt/.venv/bin/python

import os

os.system("cp ../wizardlib/builtins.py ./")
os.system(f"python -m transcrypt -b -m -n ghost.py")
