import { projectFiles } from 'archunit';
import { describe, it, expect } from 'vitest';

describe('Dependency Rules', () => {
	it('services should not directly depend on UI layer', async () => {
		const rule = projectFiles()
			.inFolder('src/services')
			.shouldNot()
			.dependOnFiles()
			.inFolder('src/ui');

		await expect(rule).toPassAsync();
	});

	it('utils should not depend on business layer', async () => {
		const rule = projectFiles()
			.inFolder('src/utils')
			.shouldNot()
			.dependOnFiles()
			.inFolder('src/business');

		await expect(rule).toPassAsync();
	});

	it('utils should not depend on services layer', async () => {
		const rule = projectFiles()
			.inFolder('src/utils')
			.shouldNot()
			.dependOnFiles()
			.inFolder('src/services');

		await expect(rule).toPassAsync();
	});

	it('utils should not depend on database layer', async () => {
		const rule = projectFiles()
			.inFolder('src/utils')
			.shouldNot()
			.dependOnFiles()
			.inFolder('src/database');

		await expect(rule).toPassAsync();
	});

	it('utils should not depend on UI layer', async () => {
		const rule = projectFiles()
			.inFolder('src/utils')
			.shouldNot()
			.dependOnFiles()
			.inFolder('src/ui');

		await expect(rule).toPassAsync();
	});

	it('ui should not depend on database layer', async () => {
		const rule = projectFiles()
			.inFolder('src/ui')
			.shouldNot()
			.dependOnFiles()
			.inFolder('src/database');

		await expect(rule).toPassAsync();
	});
});
