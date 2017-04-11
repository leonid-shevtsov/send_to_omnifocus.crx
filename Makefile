ZIP_FILE = send_to_omnifocus.zip
EXTENSION_FILES = background.js browser_action.png icon128.png icon16.png manifest.json options.html options.js options_editor.js tab_info_collector.js

$(ZIP_FILE): $(EXTENSION_FILES)
	rm -f $(ZIP_FILE)
	zip $(ZIP_FILE) $(EXTENSION_FILES)
