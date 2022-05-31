install_asdf:
	asdf install

install_ruby:
	bundle install

install_node:
	npm i --legacy-peer-deps

install_ios:
	cd ios && \
		bundle exec pod install

install_android:
	cd android && \
		./gradlew clean

install: install_asdf install_ruby install_node install_ios install_android

clean_ios:
	rm -rf $(HOME)/Library/Developer/Xcode/DerivedData/Draggable*
	cd ios && \
		rm -rf Pods build && \
		bundle exec pod cache clean --all

clean_android:
	cd android && \
		rm -rf build

clean_node:
	watchman watch-del-all
	rm -rf node_modules
	npm cache verify

clean: clean_node clean_ios clean_android

clean_install: clean install
